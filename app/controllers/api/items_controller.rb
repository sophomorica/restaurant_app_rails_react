class Api::ItemsController < ApplicationController
  before_action :set_menu
  def index
    @items = @menu.items.all
    render json: @items
  end

  def create
    item = @menu.items.new(item_params)
    if item.save
      render json: item
    else
      render json: { errors: item.errors }, status: :unprocessable_entity 
    end
  end

  def update
    item = @menu.items.find(params[:id])
    item.update(item_params)
    render json: item
  end

  def destroy
    Item.find(params[:id]).destroy
    render json: {message: 'Item deleted'}
  end

  private
  
  def item_params
    params.require(:item).permit(:name, :price)
  end
  def set_menu
    @menu = Menu.find(params[:menu_id])
  end
end
