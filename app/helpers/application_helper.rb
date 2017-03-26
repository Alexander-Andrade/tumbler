module ApplicationHelper
  def login_page?
    controllers = %w(sessions registrations passwords).freeze
    return controllers.include? controller_name
  end
end
