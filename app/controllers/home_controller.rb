class HomeController < ApplicationController
	def index
		@words = Word.all
	end

	def search
    	@words = Word.where(title: params[:query])
  	end

	def show 
		@user = User.find_by_username(params[:username])
    	@word = Word.find(params[:id])
	end
end
