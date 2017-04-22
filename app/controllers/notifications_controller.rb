class NotificationsController < ApplicationController
  def index
    @notifications = current_user.notifications.all
  end

  def create
    byebug
    respond_with current_user.notifications.create(notification_params)
  end

  def update
    @notif = Notification.find(params[:id])
    @notif.update_attributes(notification_params)
    respond_with @notif
  end

  def destroy
    if !params[:group].nil?
      @notifications = notifications_by_group(params[:group])
      respond_with @notifications.delete_all
    else
      respond_with Notification.find(params[:id]).destroy
    end
  end

  private

  def notifications_by_group(group)
    if group == 'all'
      Notification.all
    else
      Notification.where(origin: group)
    end
  end

  def notification_params
    params.require(:notification).permit(:category, :details, :origin, :read)
  end
end
