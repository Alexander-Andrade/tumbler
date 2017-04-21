class AreasController < ApplicationController
  before_action :authenticate_user!

  def index
    @areas = current_user.areas
  end

  def create
    respond_with current_user.areas.create(area_params)
  end

  def update
    @area = Area.find(params[:id])
    @area.update_attributes(area_params)
    respond_with @area
  end

  def destroy
    @area = Area.find(params[:id])
    if current_user.default_area != @area
      respond_with @area.destroy
    else
      render json: "can't destroy default area" , status: 403
    end
  end

  private

  def area_params
    params.require(:area).permit(:name)
  end
end
