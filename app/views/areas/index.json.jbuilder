json.areas @areas do |area|
  json.partial! 'areas/area', area: area

  json.devices area.devices do |device|
    json.partition 'device'
  end
end