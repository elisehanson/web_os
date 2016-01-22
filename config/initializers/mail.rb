
MANDRILL_API_KEY= "AYmiNEcV9AYL72UMMX3cDQ"

ActionMailer::Base.smtp_settings = {
  address:"smtp.mandrillapp.com",
  port: "587",
  enable_starttls_auto: true,
  user_name: "vt0826@hotmail.com",
  password: MANDRILL_API_KEY,
  authentication: "login"
}

ActionMailer::Base.delivery_method = :smtp
ActionMailer::Base.default charset: "utf-8"
