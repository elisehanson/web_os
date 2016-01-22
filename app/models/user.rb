class User < ActiveRecord::Base
  attr_accessor :password
  validates_presence_of :email,:username
  validates :email, :username,  uniqueness: true
  validates_confirmation_of :password
  before_save :encrypt_password
  has_one :setting
  has_many :words
  has_many :photos

	def encrypt_password
		self.password_salt = BCrypt::Engine.generate_salt
		self.password_hash = BCrypt::Engine.hash_secret(password, password_salt)
	end

	def self.authenticate(username, password)
	end

	def self.authenticate(username, password)
    user = User.where(username: username).first
	  if user && user.password_hash == BCrypt::Engine.hash_secret(password, user.password_salt)
	  	user
	  else
		  nil
	  end
	  end
end
