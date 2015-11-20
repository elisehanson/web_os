class WordsController < ApplicationController

	def index
		@words = Word.all
	end

  def show
    @user = User.find_by_username(params[:username])
    @word = Word.find(params[:id])
    render "words/show", :layout => false

  end

  def new
    @word = Word.new
  end

  def edit
    @word = Word.find(params[:id])
  end

  def create
    @word = Word.create(post_params)
    @word.user_id = current_user.id if current_user
    respond_to do |format|
      if @word.save
        format.html { redirect_to @word, notice: 'Post was successfully created.' }
        format.js   { }
        format.json { render :show, status: :created, location: @word }
      else
        format.html { render :new }
        format.json { render json: @word.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    @word = Word.find params[:id]
    @word.user_id = current_user.id if current_user
    respond_to do |format|
      if @word.update(post_params)
        format.html { redirect_to @word, notice: 'Post was successfully updated.' }
        format.json { render :show, status: :ok, location: @word }
      else
        format.html { render :edit }
        format.json { render json: @post.errors, status: :unprocessable_entity }
      end
    end
  end


  def destroy
    @word = Word.find(params[:id])
    if @word.present?
      @word.destroy
    end
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_word
      @word = Word.find(params[:id])
      # @post = current_user.post.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def post_params
      params.require(:word).permit(:title, :content)
      # .merge(user_id: current_user)      
    end
end


