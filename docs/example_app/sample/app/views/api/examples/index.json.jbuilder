@examples.each do |example|
  json.set! example.id do
    json.partial! 'api/examples/example.json.jbuilder', example: example
  end
end
