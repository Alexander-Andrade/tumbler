json.errors do |json|
  json.server @server.errors.full_messages.join(',')
  json.geolocation @geolocation.errors.full_messages.join(',')
  json.status 406
end