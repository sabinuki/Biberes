class Api::V1::BeerStylesController < ApplicationController
  def index
    styles = BeerStyle.all
    render json: { status: 'SUCCESS', data: styles.map(&:name) }, status: :ok
  end
end
