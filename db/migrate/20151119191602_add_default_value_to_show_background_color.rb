class AddDefaultValueToShowBackgroundColor < ActiveRecord::Migration

  def up
    change_column :settings, :background_color, :string, :default => "default"
  end

  def down
    change_column :settings, :background_color, :string, :default => nil
  end
end
