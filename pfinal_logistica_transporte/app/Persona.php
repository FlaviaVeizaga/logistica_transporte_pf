<?php

namespace App;

use Barryvdh\LaravelIdeHelper\Eloquent;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Persona
 *
 * @property-read \App\User $users
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Persona newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Persona newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Persona query()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Persona whereApellido($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Persona whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Persona whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Persona whereNombre($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Persona wherePais($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Persona whereTelefono($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Persona whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Persona whereUserId($value)
 * @mixin Eloquent
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Persona whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Persona wherePassword($value)
 * @property int $id
 * @property string $nombre
 * @property string $apellido
 * @property string $telefono
 * @property string $pais
 * @property string $email
 * @property string $password
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Dadorcarga|null $dadorescargas
 * @property-read \App\Transportista|null $transportistas
 */
class Persona extends Model
{
    //

    public function dadorescargas()
    {
        return $this->hasOne(Dadorcarga::class);
    }

    public function transportistas()
    {
        return $this->hasOne(Transportista::class);
    }
}
