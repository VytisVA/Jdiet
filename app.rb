require 'sinatra/base'

class JDietApp < Sinatra::Base

  get "/" do
    "Hello JDietApp"
  end

  run! if app_file == $0

end