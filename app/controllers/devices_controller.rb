class DevicesController < ApplicationController
  before_action :authenticate_user!

  def index
    @devices = current_user.devices
  end

  def create
    @device = Device.new(device_params)
    @device.user = current_user
    @device.area = current_user.default_area
    @device.save
    respond_with @device
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
    params.require(:device).permit(:dev_id, :name, :label, :area_id, controls: [:name, :ctrl_id, :type])
  end
end
