require 'test_helper'

class ItemsControllerTest < ActionDispatch::IntegrationTest
  test "should get api/items" do
    get items_api/items_url
    assert_response :success
  end

end
