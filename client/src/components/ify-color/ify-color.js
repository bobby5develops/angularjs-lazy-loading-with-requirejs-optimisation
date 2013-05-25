angular.module('ify.color').directive('ifyColor', function()
{
    return function(scope, $element, attrs)
    {
        $element.css({'color': attrs.ifyColor});
    }
});