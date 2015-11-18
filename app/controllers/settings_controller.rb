class SettingsController < ApplicationController
  
  def edit
    @setting = Setting.new
  end 
  
  def update
    puts "hi hi hi i"
    @user=Setting.find(1)
    @user.update(background_color: params[:background_color])
  end
end
