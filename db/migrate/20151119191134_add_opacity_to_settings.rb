class AddOpacityToSettings < ActiveRecord::Migration
  def change
    add_column :settings, :opacity, :string, :default => "default"
  end
end
