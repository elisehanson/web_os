class Photo < ActiveRecord::Base

	belongs_to :user

def self.listing(page)
  order(created_at: :desc).page(params[:page]).per(20)
end

has_attached_file :picture, styles: { small: "64x64>", med: "100x100>", large: "200x200>" }

validates_attachment_content_type :picture, content_type: /\Aimage\/.*\Z/

end