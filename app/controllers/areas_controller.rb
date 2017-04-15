class AreasController < ApplicationController
  def index
    @areas = Area.all
  end

  def create
    respond_with Area.new(area_params)
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
