class ChangeDefaultValueToOpaicty < ActiveRecord::Migration

 def up
    change_column :settings, :opacity, :string, :default => "1"
  end

  def down
    change_column :settings, :opacity, :string, :default => "default"
  end
end
