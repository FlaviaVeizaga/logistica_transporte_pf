<?php

namespace App\Http\Controllers;

use App\Dadorcarga;
use App\Misession;
use App\Persona;
use App\Transportista;
use Faker\Provider\Person;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class MisessionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
        //
        $email = null;
        $password = null;

        if ($request->json('email') != null) {
            $email = $request->json('email');
        }

        if ($request->json('password') != null) {
            $password->password = Hash::make(request()['password']);
        }
        if ($email == null || $password == null) {
            return response()->json(['res' => 'error', 'message' => 'Email o contraseña no puede ser vacios']);
        }
        $objPersona = null;
        try {
            $objPersona = Persona::whereEmail($email);
        } catch (\Exception $e) {
            return response()->json(['res' => 'error', 'message' => 'Email o contraseña invalidos']);//status 500
        }

        if ($objPersona == null) {
            return response()->json(['res' => 'error', 'message' => 'Error, persona no encontrada']);//status 404
        }
        $objPersonaTipo=null;
        $tipo = 'dador';
        try {
            $objPersonaTipo = Transportista::wherePersonaId($objPersona->id);
            if($objPersonaTipo !=null){
                $tipo= 'trans';
            }
        } catch (\Exception $e) {
            $objPersonaTipo = Dadorcarga::wherePersonaId($objPersona->id);
            if($objPersonaTipo !=null){
                $tipo= 'dador';
            }else{
                return response()->json(['res'=>'error', 'message'=>'la Persona no Pertence a ningun tipo']);
            }
        }


        return response()->json(['res' => 'success', 'data' => $objPersona, 'tipo' => $tipo]);


    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Misession $misession
     * @return \Illuminate\Http\Response
     */
    public function edit(Misession $misession)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Misession $misession
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Misession $misession)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Misession $misession
     * @return \Illuminate\Http\Response
     */
    public function destroy(Misession $misession)
    {
        //
    }
}
