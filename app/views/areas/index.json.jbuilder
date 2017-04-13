json.areas @areas do |area|
  json.partial! 'areas/area', area: area

  json.devices area.devices do |device|
    json.partial! 'devices/device', device: device
  end
end