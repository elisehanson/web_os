class ChangeDefaultValueToShowBackgroundColor < ActiveRecord::Migration
  
  def up
    change_column :settings, :background_color, :string, :default => "#e9ddcd"
  end

  def down
    change_column :settings, :background_color, :string, :default => "default"
  end

end
