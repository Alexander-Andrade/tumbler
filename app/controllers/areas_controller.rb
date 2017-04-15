class AreasController < ApplicationController
  before_action :authenticate_user!

  def index
    @areas = Area.all
  end

  def create
    respond_with Area.create(area_params)
  end

  def update
    @area = Area.find(params[:id])
    @area.update_attributes(area_params)
    respond_with @area
  end

  def destroy
    @area = Area.find(params[:id])
    respond_with @area.destroy
  end

  private

  def area_params
    params.require(:area).permit(:name)
  end
end
