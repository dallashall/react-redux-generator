@examples.each do |example|
  json.set! example.id do
    json.partial! 'example', example: example
  end
end
