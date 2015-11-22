class NewsController < ApplicationController
  def index
    @results = Google::Search::News.new(query: "top stories")
     render "news/index", :layout => false
  end
end
