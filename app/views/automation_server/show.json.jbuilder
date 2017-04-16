json.partial! 'automation_server/automation_server', server: @server

if @server.geolocation.present?
  json.geolocation  do |json|
    json.partial! 'geolocation/geolocation', geolocation: @server.geolocation
  end
end