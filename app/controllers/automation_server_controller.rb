class AutomationServerController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:update]

  def show
    @server = current_user.automation_server
  end

  def update
    @server = AutomationServer.find_by(token: params[:token])

    if @server.nil?
      render json: {msg: 'server not found', status: 404}, status: 404
      return
    end
    @geolocation = @server.geolocation || @server.build_geolocation

    @server.assign_attributes(automation_server_params)
    @geolocation.assign_attributes(geolocation_params)
    if !@server.valid? || !@geolocation.valid?
      render template: 'automation_server/update_errors', status: 406
    else
      @geolocation.save!
      @server.save!
      render json: { status: :ok, time_stamp: Time.zone.now }
    end
  end

  private

  def automation_server_params
    params.require(:automation_server).permit(:url)
  end

  def geolocation_params
    params.require(:geoloc).permit(:country, :country_code, :timezone, :region, :region_name, :lat, :lon)
  end

end
