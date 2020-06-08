<?php

namespace App;

use Barryvdh\LaravelIdeHelper\Eloquent;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Transportista
 *
 * @property-read \App\Persona $personas
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Transportista newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Transportista newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Transportista query()
 * @mixin Eloquent
 * @property int $id
 * @property int $persona_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Transportista whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Transportista whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Transportista wherePersonaId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Transportista whereUpdatedAt($value)
 * @property-read \App\Persona $users
 */
class Transportista extends Model
{
    //

    public function users()
    {
        return $this->belongsTo(Persona::class);
    }
}
