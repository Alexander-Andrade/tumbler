class AutomationServerController < ApplicationController
  skip_before_filter :verify_authenticity_token, only: [:update]

  def update
    server = AutomationServer.find_by(token: params[:token])
    debugger
    unless server.nil?
        server.update_attributes(server_params)
    end
    render json: {status: :ok}, status: :ok
    # head :no_content
  end

  private

  def server_params
    params.require(:automation_server).permit(:url)
  end
end
