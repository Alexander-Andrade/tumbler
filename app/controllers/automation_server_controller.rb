class AutomationServerController < ApplicationController
  skip_before_filter :verify_authenticity_token, only: [:update]

  def update
    server = AutomationServer.find_by(token: params[:token])

    if server.nil?
        render json: {msg: 'server not found', status: 404}, status: 404
    else
        server.update_attributes(server_params)
        render json: { status: :ok, time_stamp: Time.zone.now }, status: :ok
    end
  end

  private

  def server_params
    params.require(:automation_server).permit(:url)
  end
end
