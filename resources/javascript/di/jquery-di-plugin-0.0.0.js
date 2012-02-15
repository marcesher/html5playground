(function( $ ) {
    $.fn.di = {
        dependencies : {},
        beans : {},
        inject : function ( ref, id, prop )
        {
            var deps = this.dependenciesFor( id );

            if ( deps[ prop ] == undefined )
            {
                deps[ prop ] = []
            }
            if ( deps[ prop ].indexOf( ref ) == -1 )
            {
                deps[ prop ].push( ref );
            }

            if ( this.beans[ id ] != undefined )
            {
                ref[ prop ] = this.beans[ id ];
            }
        },
        register : function ( id, ref )
        {
            this.beans[ id ] = ref;

            var deps = this.dependenciesFor( id );

            for ( var key in deps )
            {
                var propName = deps[key];
                for ( var j in propName )
                {
                    this.inject( propName[j], id, key );
                }
            }
        },
        dependenciesFor : function ( id )
        {
            if ( this.dependencies[ id ] == undefined )
            {
                this.dependencies[ id ] = {}
            }
            return this.dependencies[ id ];
        }
    };
})( jQuery );