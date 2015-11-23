class PhotosController < ApplicationController

	def index
    @photos = Photo.all
    render "photos/index", :layout => false
      respond_to do |format|
        format.html
        format.js
      end
	end

  def show
    @user = User.find_by_id(params[:id])
    @photo = Photo.find(params[:id])
    render "photos/show", :layout => false
  end

  # GET /posts/new
  def new
    @photo = Photo.new
    @photos = Photo.all

      respond_to do |format|
        format.html
        format.js
      end
  end

  # GET /posts/1/edit
  def edit
    @photo = Photo.find(params[:id])
  end

  # POST /posts
  # POST /posts.json
  def create
    @photo = Photo.create(post_params)
    
    # @photo.user_id = current_user.id if current_user
  end

    

  # PATCH/PUT /posts/1
  # PATCH/PUT /posts/1.json
  def update
    @photo = Photo.find params[:id]
    # @post.user_id = current_user.id if current_user

  end


  def destroy
    @photo = Photo.find(params[:id])
    if @photo.present?
      @photo.destroy

      respond_to do |format|
        format.html
        format.js
      end
    end
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_photo
      @photo = Photo.find(params[:id])
      # @post = current_user.post.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def post_params
      params.require(:photo).permit(:picture)
      # .merge(user_id: current_user)      
    end

end

