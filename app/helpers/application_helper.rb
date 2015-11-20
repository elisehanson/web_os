module ApplicationHelper
 
  def icon_width
    if current_user.setting.dock_size == "smallest"
      @width= "40px"
    elsif current_user.setting.dock_size == "small"
      @width= "50px"
    elsif current_user.setting.dock_size == "large"
      @width= "70px"
    else
      @width= "60px"
    end
    @width
  end

   def icon_height
    if current_user.setting.dock_size == "smallest"
       @height1= "30px"
    elsif current_user.setting.dock_size == "small"
      @height1= "40px"
    elsif current_user.setting.dock_size == "large"
      @height1= "60px"
    else
      @height1= "50px"
    end
    @height1
  end    
 
  def column_width
    if current_user.setting.dock_size == "smallest"
      @width= "40%"
    elsif current_user.setting.dock_size == "small"
      @width= "50%"
    elsif current_user.setting.dock_size == "large"
      @width= "70%"
    else
      @width= "60%"
    end
    @width
  end
  
  def column_height
    if current_user.setting.dock_size == "smallest"
      @height= "70%"
    elsif current_user.setting.dock_size == "small"
      @height= "80%"
    elsif current_user.setting.dock_size == "large"
      @height= "110%"
    else
      @height= "100%"
    end
    @height
  end

  def margin_left
    if current_user.setting.dock_size == "smallest"
      @width= "30%"
    elsif current_user.setting.dock_size == "small"
      @width= "25%"
    elsif current_user.setting.dock_size == "large"
      @width= "15%"
    else
      @width= "20%"
    end
    @width
  end

  def margin_top
    if current_user.setting.dock_size == "smallest"
      @margin="2%"
    elsif current_user.setting.dock_size == "small"
      @margin="1%"
    else
      @margin="0%"
    end
    @margin
  end


end
