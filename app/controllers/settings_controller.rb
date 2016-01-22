class SettingsController < ApplicationController
  
  def edit
    @setting = Setting.new
  end 
  
  def update
    @user_setting=current_user.setting
    @user_setting.update(:background_color => params[:background_color], :dock_size => params[:dock_size])
  end
end
