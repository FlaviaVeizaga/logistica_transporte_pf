<?php

namespace App;

use Barryvdh\LaravelIdeHelper\Eloquent;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Dadorcarga
 *
 * @property-read \App\Persona $personas
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Dadorcarga newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Dadorcarga newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Dadorcarga query()
 * @mixin Eloquent
 * @property int $id
 * @property int $persona_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Dadorcarga whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Dadorcarga whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Dadorcarga wherePersonaId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Dadorcarga whereUpdatedAt($value)
 */
class Dadorcarga extends Model
{
    //
    public function personas()
    {
        return $this->belongsTo(Persona::class);
    }
}
