class UserMailer < ApplicationMailer
  
  def email(email,subject,body,current_email)
    mail :subject => subject,
          :to      => email,
          :from    => current_email,
          :body => body
   end
end
