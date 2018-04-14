require 'sinatra/base'
require './lib/jd_model'

class JDietApp < Sinatra::Base

  get '/' do
    @jd_element = JDModel.all
    erb :index
  end

  run! if app_file == $0

end