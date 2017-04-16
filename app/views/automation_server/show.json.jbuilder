json.partial! 'automation_server/automation_server', server: @server
json.geolocation  do |json|
  json.partial! 'geolocation/geolocation', geolocation: @server.geolocation
end