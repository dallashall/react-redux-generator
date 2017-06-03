require 'test_helper'

class Api::ExamplesControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_examples_create_url
    assert_response :success
  end

  test "should get show" do
    get api_examples_show_url
    assert_response :success
  end

  test "should get update" do
    get api_examples_update_url
    assert_response :success
  end

  test "should get index" do
    get api_examples_index_url
    assert_response :success
  end

end
