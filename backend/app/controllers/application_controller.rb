class ApplicationController < ActionController::API
  include DeviseTokenAuth::Concerns::SetUserByToken

  # TODO: 以下の設定は必要なのか
  # skip_before_action :verify_authenticity_token
  # helper_method :current_user, :user_signed_in?
end
