class EmailsController < ApplicationController
 
  def create
    @current_email= current_user.email
    UserMailer.email(params[:emails][:email],params[:emails][:subject],params[:emails][:body],@current_email).deliver
    respond_to do |format|
    	format.html
    	format.js
    end
  end

  private
		def email_params
			params.require(:emails).permit(:email,:subject, :body)
		end

end
