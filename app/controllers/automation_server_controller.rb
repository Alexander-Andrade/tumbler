class AutomationServerController < ApplicationController
  skip_before_filter :verify_authenticity_token, only: [:update]

  def get
    @server = current_user.automation_server
    byebug
  end

  def update
    @server = AutomationServer.find_by(token: params[:token])
    @geolocation = @server.geolocation

    if @server.nil?
      render json: {msg: 'server not found', status: 404}, status: 404
    elsif !@server.update_attributes(automation_server_params)
      render json: { errors: @server.errors,status: :unprocessable_entit, time_stamp: Time.zone.now }
    elsif !@geolocation.update_attributes(geolocation_params)
      render json: { errors: @geolocation.errors,status: :unprocessable_entit, time_stamp: Time.zone.now }
    else
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
