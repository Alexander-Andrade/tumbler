class DevicesController < ApplicationController
  before_action :authenticate_user!

  def index
    @devices = current_user.devices
  end

  def create
    respond_with Device.create(device_params)
  end

  def update
    @device = Device.find(params[:id])
    @device.update_attributes(device_params)
    respond_with @device
  end

  def destroy
    @device = Device.find(params[:id])
    respond_with @device.destroy
  end

  private

  def device_params
    params.require(:device).permit(:dev_id, :name, :label, :controls, :area_id)
  end
end
