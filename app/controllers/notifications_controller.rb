class NotificationsController < ApplicationController
  def index
    @notifications = current_user.Notification.all
  end

  def create
    respond_with current_user.notifications.create(notification_params)
  end

  def destroy

  end

  private

  def notification_params
    params.require(:area).permit(:name)
  end
end
