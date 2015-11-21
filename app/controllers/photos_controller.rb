class PhotosController < ApplicationController

	def index
    @photos = Photo.all
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
    respond_to do |format|
      if @photo.save
        format.html { redirect_to @photo, notice: 'Post was successfully created.' }
        format.json { render :show, status: :created, location: @photo }
      else
        format.html { render :new }
        format.json { render json: @post.errors, status: :unprocessable_entity }
      end
    end
  end

    

  # PATCH/PUT /posts/1
  # PATCH/PUT /posts/1.json
  def update
    @photo = Photo.find params[:id]
    # @post.user_id = current_user.id if current_user
    respond_to do |format|
      if @photo.update()
        format.html { redirect_to @photo, notice: 'Post was successfully updated.' }
        format.json { render :show, status: :ok, location: @photo }
      else
        format.html { render :edit }
        format.json { render json: @photo.errors, status: :unprocessable_entity }
      end
    end
  end


  def destroy
    @photo = Post.find(params[:id])
    if @photo.present?
      @photo.destroy
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

