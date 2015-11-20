class AddDockSizeTo < ActiveRecord::Migration
  def change
    add_column :settings, :dock_size, :string, :default => "default"
  end
end
