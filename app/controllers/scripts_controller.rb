class ScriptsController < ApplicationController
  before_action :authenticate_user!

  def index
    @scripts = current_user.scripts.all
  end

  def create
    respond_with current_user.scripts.create(script_params)
  end

  def update
    @script = Script.find(params[:id])
    @script.update_attributes(script_params)
    respond_with @script
  end

  def destroy
    respond_with Script.find(params[:id]).destroy
  end

  private

  def script_params
    params.require(:script).permit(:name, :code, :description, :status)
  end

end
