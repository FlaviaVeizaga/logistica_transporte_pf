<?php

namespace App;

use Barryvdh\LaravelIdeHelper\Eloquent;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Misession
 *
 * @property string $email
 * @property string $password
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Misession newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Misession newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Misession query()
 * @mixin Eloquent
 */
class Misession extends Model
{
    //
    public $email;
    public $password;

}
