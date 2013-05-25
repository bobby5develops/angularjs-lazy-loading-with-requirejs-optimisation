angular.module('ify.color').directive('ifyChangeColorOnClickTo', function()
{
    return function(scope, $element, attrs)
    {
        $element.on('click', function()
        {
            $element.css({'color': attrs.ifyChangeColorOnClickTo});
        });
    }
});