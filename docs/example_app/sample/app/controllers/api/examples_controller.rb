class Api::ExamplesController < ApplicationController
  def create
    @example = Example.new(example_params)
    if @example.save
      render :show
    else
      render json: @example.errors.full_messages, status: 402
    end
  end

  def show
    @example = Example.find_by(id: params[:id])
  end

  def update
    @example = Example.find_by(id: params[:id])
    if @example.update_attributes(example_params)
      render :show
    else
      render json: @example.errors.full_messages, status: 402
    end
  end

  def index
    @examples = Example.all
  end

  def destroy
    @example = Example.find_by(id: params[:id])
    if @example.destroy
      render :show
    else
      render json: ["Unable to destroy"], status: 402
    end
  end

  def example_params
    params.require(:example).permit(:string_variable, :number_variable)
  end
end
